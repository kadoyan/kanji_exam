<script lang="ts">
	type KanjiItem = {
		kanji: string;
		yomi: string;
	};

	type QuestionPart =
		| {
				type: "text";
				text: string;
		  }
		| {
				type: "blank";
				text: string;
		  };

	let data: KanjiItem[] = [];
	let isLoading = true;
	const max_choosed = 20;

	//fonts
	let font = "yu-font";
	let choosed: KanjiItem[] = [];
	let showAnswer = false;

	async function fetchData() {
		const response = await fetch("./kanji_v2.json");
		data = await response.json();
		isLoading = false;
	}
	fetchData();

	function parseQuestionParts(item: KanjiItem): QuestionPart[] {
		const match = item.kanji.match(/^(.*?)\{(.+?)\}(.*)$/);
		if (!match) {
			return [{ type: "blank", text: item.kanji }];
		}

		const [, before, blank, after] = match;
		return [
			...(before ? [{ type: "text" as const, text: before }] : []),
			{ type: "blank" as const, text: blank },
			...(after ? [{ type: "text" as const, text: after }] : []),
		];
	}

	function answerText(item: KanjiItem) {
		return item.kanji.replace(/[{}]/g, "");
	}

	function randomChoice() {
		const numOfChoose = document.getElementById(
			"num_of_choose",
		) as HTMLSelectElement;
		let num: number = 0;
		if (numOfChoose) {
			num = Number(numOfChoose.value);
		}
		if (num > 0) {
			const newChoosed: KanjiItem[] = [];
			let indices = new Set<number>();
			// ランダムにインデックスを選択
			let loop = num;
			if (data.length < num) {
				loop = data.length;
			}
			while (indices.size < loop) {
				indices.add(Math.floor(Math.random() * data.length));
			}

			// 選ばれたインデックスに基づいて新しいchoosed配列を構築
			indices.forEach((index) => {
				newChoosed.push(data[index]);
			});

			// Svelteに配列の変更を検出させるために、choosedを置き換える
			choosed = newChoosed;
		}
	}

	// カスタムJSON読み込み
	async function uploadJson(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) {
			return false;
		}

		const reader = new FileReader();
		reader.onload = function (evt) {
			const result = evt.target?.result;
			if (typeof result !== "string") {
				return false;
			}

			try {
				data = JSON.parse(result);
				choosed = [];
			} catch (e) {
				return false;
			}
		};
		reader.onerror = function () {
			return false;
		};
		reader.readAsText(file);
	}
</script>

<main class={font}>
	<div class="noprint">
		<h1>漢字練習問題作成</h1>
		<h2>フォント（ローカルにインストールが必要です）</h2>
		<p class="yu-font">
			<label for="font-yu"
				><input
					type="radio"
					name="font"
					id="font-yu"
					value="yu-font"
					bind:group={font}
				/>游教科書体</label
			>
		</p>
		<p class="ud-font">
			<label for="font-ud"
				><input
					type="radio"
					name="font"
					id="font-ud"
					value="ud-font"
					bind:group={font}
				/>UDデジタル教科書体 ProN R</label
			>
		</p>
		<div>
			<h2>JSONをアップロード</h2>
			<input
				type="file"
				name="json"
				id="custom_json"
				on:change={uploadJson}
				accept=".json"
			/>
		</div>

		<h2>
			漢字候補（最大{max_choosed}問{#if choosed.length > 0}／{choosed.length}問
				選択中{/if}）
		</h2>
		<div>
			<select name="num_of_choose" id="num_of_choose">
				<option value="">ランダム選択する数</option>
				<option value="5">5問</option>
				<option value="10">10問</option>
				<option value="15">15問</option>
				<option value="20">20問</option>
			</select>
			<button on:click={randomChoice}>ランダムに選ぶ</button>
		</div>
		<div class="list {font}">
			{#if isLoading}
				<p>Loading...</p>
			{:else}
				{#each data as word}
					<p class="item">
						<label>
							<input
								type="checkbox"
								name="kanji"
								value={word}
								id={word.yomi}
								bind:group={choosed}
								disabled={choosed.length === max_choosed &&
									!choosed.includes(word)}
							/>
							{answerText(word)}<span class="kana">（{word.yomi}）</span
							>
						</label>
					</p>
				{/each}
			{/if}
		</div>
		<h2>答え</h2>
		<label for="show_answer"
			><input
				type="checkbox"
				name="show_answer"
				id="show_answer"
				bind:checked={showAnswer}
			/>答えも印刷する</label
		>
	</div>

	<div class="paper {font}">
		<div class="question">
			<h3 class="noprint">問題</h3>
			{#if choosed.length <= 0}
				<p>漢字を選んでください。</p>
			{:else}
				{#each choosed as item, index}
					<div class="item">
						<span class="index">({index + 1})</span>
						<div class="sentence">
							{#each parseQuestionParts(item) as part}
								{#if part.type === "text"}
									<span class="sentence_text">{part.text}</span>
								{:else}
									<span class="blank_with_yomi">
										<span class="kana">{item.yomi}</span>
										<span class="kanji_box">
											{#each Array.from({ length: part.text.length }) as _}
												<span class="kanji"></span>
											{/each}
										</span>
									</span>
								{/if}
							{/each}
						</div>
					</div>
				{/each}
			{/if}
		</div>
		{#if showAnswer}
			<div class="answer">
				<h3 class="noprint">回答</h3>
				{#each choosed as item, index}
					<div class="item">
						<span class="index">({index + 1})</span>{answerText(item)}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>
