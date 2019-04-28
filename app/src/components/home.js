import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import data from '../data/pages.json'

class Home extends React.Component {

    render() {
        var images = [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },]

        return (
            <div>
                <label>
                    Name:
                         <input id="pageLookup" type="text" name="name" />
                </label>
                <button onClick={this.checkPage} />
                <Gallery id = "gallery" images={images} />,
            </div>
        );
    }

    checkPage(event) {
        console.log(data);
        console.log(document.getElementById("pageLookup").value);
        data.pages.map((item, key) => {
                if (document.getElementById("pageLookup").value == item.name) {
                    console.log("you got it");
                }
            }   
        );

        const newImage = {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)"
        }

        //document.getElementById("gallery").images.push(newImage);
    }
}

export default Home;