import React from 'react';

//Importando styles
import styles from './Main.css';

//Importando Imagens
import imagemProduto from '../../../assets/imagemProduto.png'
import carrinhoTag from '../../../assets/compartilharIcon.png'
import coracaoIcon from '../../../assets/coracao_icon.png'

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
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
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
            <img className='imagemProduto' src={imagemProduto} alt="ImagemProduto" />
          </div>


          <div className='descricao'>
            <h4 className='tituloProduto'>NARUTO</h4>
            <h6 className='descricaoProduto'>Action Figures Kakashi Hatake</h6>
            <button onClick={addCarrinho} className='AddButton'>ADICIONAR AO CARRINHO</button>
            <h6 className='preco'>R$190,80</h6>
            <h6 className='parcelamento'>Ou 12x de 15,90 s/Juros</h6>
          </div>



        </div>



      </div>

    </div>
  );
}