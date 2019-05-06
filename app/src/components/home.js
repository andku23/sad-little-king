import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import data from '../data/pages.json'

class Home extends React.Component {

	constructor(props){
		//Standard React Init and binding
		super(props);
		this.checkPage = this.checkPage.bind(this);

		//Listen for events
		window.addEventListener('resize', this.checkPage);

		//Require all images in ./imgs to be included
		const imageFolder = require.context('../imgs', false, /\.(png|jpe?g|svg)$/);
		let importedImages = {};
		imageFolder.keys().map((item, index) => { importedImages[item.replace('./', '')] = imageFolder(item); });

		//Init state with any initial images and
		//make all required images referencable in state
		this.state = 
		{
			images: [{
				src: importedImages["banda3-150x150.png"],
				thumbnail: importedImages["banda3-150x150.png"],
				thumbnailWidth: 320,
				thumbnailHeight: 174,
				isSelected: false,
				caption: "After Rain (Jeshu John - designerspics.com)"
			},],
			reqimgs: importedImages 

		}
	}

    render() {
        return (
            <div>
                <label>
                    Name:
                         <input id="pageLookup" type="text" name="name" />
                </label>
                <button onClick={this.checkPage} />
                <Gallery id = "gallery" images={this.state.images} />,
            </div>
        );
    }

    checkPage(event) {

		//Debug check current images and current input text
        console.log(this.state.images);
        console.log(document.getElementById("pageLookup").value);

		//Map through and find if any matches to keywork in pages.json
        data.pages.map((item, key) => {
				//If match add new image to state to update grid
                if (document.getElementById("pageLookup").value == item.name) {
                    const newImage = {
						src: this.state.reqimgs[item.src],
						thumbnail: this.state.reqimgs[item.thumbnail],
						thumbnailWidth: item.thumbnailWidth,
						thumbnailHeight: item.thumbnailHeight,
						isSelected: false,
						caption: document.getElementById("pageLookup").value,
					}

					this.setState(prevState => ({
						images: [...prevState.images, newImage]
					}))
                }
            }   
        );

        
    }
}

export default Home;