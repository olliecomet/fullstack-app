import Component from '../Component.js';
import Header from './Header.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->

                <main>
                    <section class="home"></section>
                </main>
    
                <footer>
                    <p>&copy Ollie's Bookshelf 2019</p>
                </footer>
            </div>        
        `;
    }
}

export default App;