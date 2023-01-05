// import Carousel from 'react-material-ui-carousel'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import { Paper, Button } from '@mui/material'

function App() {

  productScroll();

  function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    let slide = document.getElementById("slide");
    let item = document.getElementById("slide");
  
    for (let i = 0; i < next.length; i++) {
      //refer elements by class name
  
      let position = 0; //slider postion
  
      prev[i].addEventListener("click", function() {
        //click previos button
        if (position > 0) {
          //avoid slide left beyond the first item
          position -= 1;
          translateX(position); //translate items
        }
      });
  
      next[i].addEventListener("click", function() {
        if (position >= 0 && position < hiddenItems()) {
          //avoid slide right beyond the last item
          position += 1;
          translateX(position); //translate items
        }
      });
    }
  
    function hiddenItems() {
      //get hidden items
      let items = getCount(item, false);
      let visibleItems = slider.offsetWidth / 210;
      return items - Math.ceil(visibleItems);
    }
  }
  
  function translateX(position) {
    //translate items
    slide.style.left = position * -210 + "px";
  }
  
  function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
      if (parent.childNodes[i].nodeType != 3) {
        if (getChildrensChildren)
          relevantChildren += getCount(parent.childNodes[i], true);
        relevantChildren++;
      }
    }
    return relevantChildren;
  }
  
  return (
    <div className="App">
  <h1>Ahmed Raza</h1>
{/* 
  <div  className='mmkhgb'>
  <div class="carousel">
    <ul class="slides asdasasddrtneom">
      <input  className='eeffoolpp' type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"/>
        </div>
        <div class="carousel-controls">
          <label for="img-3" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input  className='eeffoolpp' type="radio" name="radio-buttons" id="img-2" />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"/>
        </div>
        <div class="carousel-controls">
          <label for="img-1" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input  className='eeffoolpp' type="radio" name="radio-buttons" id="img-3" />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"/>
        </div>
        <div class="carousel-controls">
          <label for="img-2" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-1" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input  className='eeffoolpp' type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://m.media-amazon.com/images/M/MV5BOGI5YTExZGYtMmNiMC00OGE2LTgxZGEtNzc2NzExMTMxNjU0XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"/>
        </div>
        <div class="carousel-controls">
          <label for="img-3" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div> */}





<div class="slider" id="slider">
  <div class="slide" id="slide">
    <img class="item" src="http://via.placeholder.com/200x200?text=Product1"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product1"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product1"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product1"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product2"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product2"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product2"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product2"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product3"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product3"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product3"/>
    <img class="item" src="http://via.placeholder.com/200x200?text=Product3"/>
  </div>
  <button class="ctrl-btn pro-prev">Prev</button>
  <button class="ctrl-btn pro-next">Next</button>
</div>


  {/* <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel> */}
    </div>
  )
}

export default App
