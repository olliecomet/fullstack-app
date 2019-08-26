import Component from '../Component.js';

class Header extends Component {
    renderHTML(){
        const title = this.props.title || 'Home';

        return /*html*/`
            <header>
                <img src="./assets/logo.png" alt="Book Logo">
                <h1>${title}</h1>

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