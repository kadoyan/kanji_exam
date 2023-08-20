<script lang="ts">

	let data = null;
	let isLoading = true;

	//fonts
	let font = "yu-font";
	let choosed = [];
	let showAnswer = false;

	async function fetchData() {
		const response = await fetch("./kanji.json");
		data = await response.json();
		isLoading = false;
		chooseKanji(data);
	}
	fetchData();

	function chooseKanji(data) {
		const keys = Object.keys(data);
		const length = keys.length;
		const choosed = keys[Math.floor(Math.random()*length)];
	}
</script>

<main class="">
	<div class="noprint">
		<h1>漢字練習問題作成</h1>
		<h2>フォント</h2>
		<p class="yu-font"><label for="font-yu"><input type="radio" name="font" id="font-yu" value="yu-font" bind:group={font}>游教科書体</label></p>
		<p class="ud-font"><label for="font-ud"><input type="radio" name="font" id="font-ud" value="ud-font" bind:group={font}>UDデジタル教科書体 ProN R</label></p>
		
		<h2>漢字候補</h2>
		<div class="list {font}">
			{#if isLoading}
				<p>Loading...</p>
			{:else}
			{#each data.ninen as word (word.yomi)}
			<p class="item">
				<label for="{word.yomi}">
				<input type="checkbox" name="kanji" value="{word}" id="{word.yomi}" bind:group={choosed}>
				{word.kanji}（{word.yomi}）
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
