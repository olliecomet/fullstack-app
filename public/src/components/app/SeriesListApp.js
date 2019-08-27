import Component from '../Component.js';
import Header from './Header.js';
import SeriesList from './SeriesList.js';
// import { getAllSeries } from '../../services/series-api.js';

class SeriesListApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Bookshelf' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const list = new SeriesList({ allSeries: [] });
        main.appendChild(list.renderDOM());

        // refer to component photo gallery

        // getAllSeries()
            // .then(allSeries => {
                // list.update({ allSeries });
            // });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header appears here -->

                
                <main></main>

                <footer>
                    <p>&copy Ollie's Bookshelf 2019</p>
                </footer>
            </div>
        `;
    }
}

export default SeriesListApp;