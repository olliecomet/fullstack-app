import Component from '../Component.js';

class SeriesItem extends Component {
    renderHTML() {
        const series = this.props.series;

        return /*html*/`
            <li>
                <div class="flex-container">
                    <div class="image-container">
                        <img src="${series.url}" alt="${series.name}">              
                    </div>

                    <div class="text-container">
                        <h2>Title: ${series.title}</h2>
                        <h3>Author: ${series.author}</h3>
                        <p>Genre: ${series.genre}</p>
                        <p>Chapters: ${series.chapters}</p>
                        <p>Ongoing: ${series.ongoing}</p>
                    </div>
                </div>
            </li>
        `;
    }
}

export default SeriesItem;