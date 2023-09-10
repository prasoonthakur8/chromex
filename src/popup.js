import $ from 'jquery';
import './styles.css';

$(document).ready(function () {
  $('#sayHiButton').click(function () {
    alert('Hello');
  });
});