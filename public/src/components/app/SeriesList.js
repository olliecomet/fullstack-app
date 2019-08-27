import Component from '../Component.js';
import SeriesItem from './SeriesItem.js';

class SeriesList extends Component {
    onRender(dom) {
        const allSeries = this.props.allSeries;

        allSeries.forEach(series => {
            const props = { series: series };
            const seriesItem = new SeriesItem(props);
            const seriesItemDOM = seriesItem.renderDOM();
            dom.appendChild(seriesItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="series-list"></ul>
        `;
    }
}

export default SeriesList;