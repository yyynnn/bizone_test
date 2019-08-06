export const render500 = ({ error, buildId }) => {
  return `
	<!DOCTYPE html>
	<meta charset="utf-8">
	<title>МТС Банк — Кредиты, кредитные карты, вклады | 500</title>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta name="build_id" content="${buildId}"/>
	<body>

		<div class="eggblog500_wrapper">
			<h1>Ошибка на нашей стороне</h1>
			<p>Перезагрузите страницу</p>
		</div>
		<style>
			* {
			font-family: 'Futura New';
			}
			h1{margin-bottom: 5px}
			body,html {
				background-color: black;
				color: white;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			.eggblog500_wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				flex-direction: column;
				text-align: center;
			}
		</style>
	</body>
  `.trim()
}
