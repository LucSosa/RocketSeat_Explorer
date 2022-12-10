let option;

let items = [];

do {
  option = Number(
    prompt(`
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  );
  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item");
      items.push(item);
      break;
    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados");
      } else {
        alert(items);
      }
      break;
    case 3:
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida. Tente novamente");
  }
} while (option != 3);
