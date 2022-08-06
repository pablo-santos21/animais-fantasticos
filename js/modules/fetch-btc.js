export default function initFetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (150 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
