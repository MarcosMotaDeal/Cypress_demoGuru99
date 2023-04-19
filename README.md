# Cypress_demoGuru99

Obs: Não foi possível prosseguir com a automação com base do conteúdo disponibilizado, no caso, "Be The Hero" do canal "Agilizei" pois a mesma apresentou erro ao mapear elemento. 

Por isso foi feito com base na massa a seguir: https://demo.guru99.com/test/newtours/register.php

README - Teste de formulário de registro

Este é um teste automatizado para preencher e enviar um formulário de registro em uma página da web e verificar se o registro foi concluído com sucesso.

O teste é realizado com a biblioteca de teste cypress, e consiste nos seguintes passos:

Visite a página web onde o formulário de registro está localizado;
Preencha o formulário com informações válidas nos campos obrigatórios;
Capture uma screenshot antes e depois de clicar no botão de envio;
Verifique se todos os campos obrigatórios foram preenchidos corretamente;
Verifique se a mensagem "Thank you for registering." foi exibida na página.
O teste tem como objetivo garantir que o formulário de registro esteja funcionando corretamente e que os usuários possam se registrar com sucesso na página.

Pré-requisitos
Node.js instalado na máquina;
NPM instalado na máquina;
Cypress instalado na máquina.
Como executar o teste
Clone o repositório do projeto;

Abra o terminal e navegue até o diretório onde o projeto foi clonado;

Digite o seguinte comando para abrir o cypress:

npx cypress open ou npx cypress run --record --key 6c3fefd4-3167-492d-914f-4a29554ce44a (este, serve para gerar evidência em video)

Clique no arquivo de teste "formularioRegistro.spec.js" para executar o teste.

O cypress irá abrir uma janela do navegador para executar o teste.

Resultados do teste:

O resultado do teste será exibido na janela do cypress, indicando se cada etapa do teste foi aprovada ou reprovada. 

Se alguma etapa do teste falhar, o cypress irá exibir uma mensagem de erro indicando qual foi o problema.

Uma pasta de screenshots será gerada automaticamente com as imagens capturadas antes e depois do envio do formulário. 

As imagens podem ser usadas para fins de depuração ou análise de erros.

Uma pasta de video também será gerada automaticamente com video evidência do teste.
