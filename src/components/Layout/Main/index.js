import React from 'react';

//Importando styles
import './Main.css';

//Importando Imagens
import imagemProduto from '../../../assets/imagemProduto.png'
import carrinhoTag from '../../../assets/compartilharIcon.png'
import coracaoIcon from '../../../assets/coracao_icon.png'
import sasori from '../../../assets/sasori.png'
import itachi from '../../../assets/uchiha.png'
import onepiece from '../../../assets/onepiece1.png'
import pain from '../../../assets/pain.png'
import gaara from '../../../assets/gaara.png'
import jacksparrow from '../../../assets/jacksparrow.png'
import goku from '../../../assets/goku.png'


export default function Main() {

  //Função de favoritar Produto
  function favTag() {
    alert('Você clicou em favoritar produto!')
  }

  //Função de compartilhar Produto
  function compartilharTag() {
    alert('Você clicou em Compartilhar!')
  }

  //Função de Adicionar ao Carrinho
  function addCarrinho() {
    alert('Você adicionou o produto ao carrinho!')
  }

  return (
    <div className='main'>


      <div className='ContainerProdutos'>


        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Kakashi Hatake</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$190,80</h6>
            <h6 className='parcelamento'>Ou 12x de 15,90 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={sasori} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Sasori Akatsuki</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$81,75</h6>
            <h6 className='parcelamento'>Ou 12x de 6,81 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={onepiece} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Trafalgar Law Big Size Banpresso</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$390,00</h6>
            <h6 className='parcelamento'>Ou 12x de 32,57 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={itachi} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Uchiha Itachi Akatsuki</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$420,00</h6>
            <h6 className='parcelamento'>Ou 12x de 35,00 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={pain} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Pain Akatsuki</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$93,88</h6>
            <h6 className='parcelamento'>Ou 12x de 7,86 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={gaara} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Gaara Quarto Hokage</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$420,00</h6>
            <h6 className='parcelamento'>Ou 12x de 35,00 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={jacksparrow} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figure Capitão Jack Sparrow</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$399,90</h6>
            <h6 className='parcelamento'>Ou 12x de 32,33 s/Juros</h6>
          </div>



        </div>

        <div className='CardProdutos'>

          <div className='tags'>
            <img onClick={favTag} className='favoritotag' src={coracaoIcon} alt="tagFavorito" />
            <img onClick={compartilharTag} className='compartilharTag' src={carrinhoTag} alt="tagCompartilhar" />
          </div>

          <div className='imagemProduto'>
            <img className='imagemProduto' src={goku} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>DRAGON BALL Z</h4>
            <h6 className='descricaoProduto'>Action Figure Goku</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$180,00</h6>
            <h6 className='parcelamento'>Ou 12x de 15,00 s/Juros</h6>
          </div>



        </div>






      </div>

    </div>
  );
}