import {User} from './../src/js/user.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.user = function (age) { return new User(age) };