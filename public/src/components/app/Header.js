import Component from '../Component.js';

// h1 value changes depending on page
// how do I do that dynamically? ${}

class Header extends component {
    renderHTML(){
        return /*html*/`
        <header>
            <img src="./assets/logo.png" alt="Book Logo">
            <h1></h1>

            <nav>
                <ul class="nav-ul">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./series-list.html">Bookshelf</a></li>
                    <li><a href="./series-form.html">Add Series</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

export default Header;