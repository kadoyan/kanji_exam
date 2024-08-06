<script lang="ts">

	let data = null;
	let isLoading = true;
	const max_choosed = 20

	//fonts
	let font = "yu-font";
	let choosed:Element[] = [];
	let showAnswer = false;

	async function fetchData() {
		const response = await fetch("./kanji.json");
		data = await response.json();
		isLoading = false;
		chooseKanji(data);
	}
	fetchData();

	function chooseKanji(data:JSON) {
		const keys = Object.keys(data);
		const length = keys.length;
	}

	function randomChoice() {
		const numOfChoose = document.getElementById("num_of_choose") as HTMLSelectElement;
		let num:number = 0
		if (numOfChoose) {
			num = Number(numOfChoose.value);
		}
		if (num > 0) {
			const newChoosed:Element[] = [];
			let indices = new Set();
			// ランダムな20問のインデックスを選択
			while (indices.size < num) {
				indices.add(Math.floor(Math.random() * data.length));
			}
			
			// 選ばれたインデックスに基づいて新しいchoosed配列を構築
			indices.forEach(index => {
				newChoosed.push(data[index]);
			});

			// Svelteに配列の変更を検出させるために、choosedを置き換える
			choosed = newChoosed;
		}
	}
</script>

<main class="{font}">
	<div class="noprint">
		<h1>漢字練習問題作成</h1>
		<h2>フォント（ローカルにインストールが必要です）</h2>
		<p class="yu-font"><label for="font-yu"><input type="radio" name="font" id="font-yu" value="yu-font" bind:group={font}>游教科書体</label></p>
		<p class="ud-font"><label for="font-ud"><input type="radio" name="font" id="font-ud" value="ud-font" bind:group={font}>UDデジタル教科書体 ProN R</label></p>
		
		<h2>漢字候補（最大{max_choosed}問{#if choosed.length > 0}／{choosed.length}問 選択中{/if}）</h2>
		<select name="num_of_choose" id="num_of_choose">
			<option value="">ランダム選択する数</option>
			<option value="5">5問</option>
			<option value="10">10問</option>
			<option value="15">15問</option>
			<option value="20">20問</option>
		</select>
		<button on:click={randomChoice}>ランダムに選ぶ</button>
		<div class="list {font}">
			{#if isLoading}
				<p>Loading...</p>
			{:else}
			{#each data as word (word.yomi)}
			<p class="item">
				<label for="{word.yomi}">
				<input type="checkbox" name="kanji"
					value="{word}"
					id="{word.yomi}"
					bind:group={choosed}
					disabled={choosed.length === max_choosed && !choosed.includes(word)}
				>
				{word.kanji}<span class="kana">（{word.yomi}）</span>
				</label>
			</p>
			{/each}
			{/if}
		</div>
		<h2>答え</h2>
		<label for="show_answer"><input type="checkbox" name="show_answer" id="show_answer" bind:checked={showAnswer}>答えも印刷する</label>
	</div>

	<div class="paper {font}">
		<div class="question">
			<h3 class="noprint">問題</h3>
			{#if choosed.length <= 0}
				<p>漢字を選んでください。</p>
			{:else}
				{#each choosed as item, index}
					<div class="item">
						<div class="kana"><span class="index">({index+1})</span>{item.yomi}</div>
						<div class="kanji_box">
							{#each Array.from({length: item.kanji.length}) as _, i}
								<div class="kanji"></div>
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
						<span class="index">({index+1})</span>{item.kanji}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>
