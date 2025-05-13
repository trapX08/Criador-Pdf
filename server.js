import puppeteer from 'puppeteer';


const html = `<html>
		<head>
		</head>
		<body style='padding: 70px;'>
			<div style="border: solid black 1px; height: 700px;">
				<h1 style="text-align: center">Hello!</h1>
			</div>
		</body>
	</html>`


export const criarPdf = async (url, name, size = 'A4', orientation = false) => {
	try{
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

  // Você pode carregar um arquivo HTML ou uma URL
 // await page.goto(url); //Essa linha serve para pegar uma pagina web
	await page.setContent(url);

  // Gera o PDF
	await page.pdf({
	  path: name+'.pdf', // caminho onde será salvo
	  format: size,
	  landscape: orientation,
	  printBackground: true
	});
	await browser.close();
	console.log('PDF gerado com sucesso!');
	}catch(error){
		console.error('Error: ', error)
	}
};

criarPdf(html, 'test', 'A4', false)
//criarPdf("https://angoschool.com/angoschool/login/entrar/", 'test', 'A3')
