import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Component} from 'react';
import { Dropdown, List, Image, Segment, Container, Header, Menu, Grid } from 'semantic-ui-react';


class MiddleMenu extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (

            <Menu fluid widths = {9} compact secondary>
                <Dropdown text='MEN' pointing className='link item'>
                    <Dropdown.Menu>


                        <Dropdown.Item>TANKTOPS</Dropdown.Item>
                        <Dropdown.Item>SHIRTS</Dropdown.Item>
                        <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                        <Dropdown.Item>SWEATSHIRTS & JACKETS</Dropdown.Item>
                        <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                        <Dropdown.Item>BOARDSHORTS & POOL SHORTS</Dropdown.Item>
                        <Dropdown.Item>HATS</Dropdown.Item>
                        <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                        <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                        <Dropdown.Item>STICKERS</Dropdown.Item>

                    </Dropdown.Menu>

                </Dropdown>
                <Dropdown text='WOMEN' pointing className='link item'>
                    <Dropdown.Menu>


                        <Dropdown.Item>TANKTOPS</Dropdown.Item>
                        <Dropdown.Item>SHIRTS</Dropdown.Item>
                        <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                        <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                        <Dropdown.Item>HATS</Dropdown.Item>
                        <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                        <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                        <Dropdown.Item>STICKERS</Dropdown.Item>

                    </Dropdown.Menu>

                </Dropdown>

                <Dropdown text='KIDS' pointing className='link item'>
                    <Dropdown.Menu>



                        <Dropdown.Item>SHIRTS</Dropdown.Item>
                        <Dropdown.Item>ONESIES</Dropdown.Item>
                        <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                        <Dropdown.Item>ACCESSORIES</Dropdown.Item>

                    </Dropdown.Menu>

                </Dropdown>
                <Dropdown text='BRANDS' pointing className='link item'>
                    <Dropdown.Menu>


                        <Dropdown.Item>TANKTOPS</Dropdown.Item>
                        <Dropdown.Item>Aloha Surf Projects</Dropdown.Item>
                        <Dropdown.Item>Da Mokes</Dropdown.Item>
                        <Dropdown.Item>Farmers Market Hawaii</Dropdown.Item>
                        <Dropdown.Item>Hawaii Domestic Market</Dropdown.Item>
                        <Dropdown.Item>Herschel Supply Co.</Dropdown.Item>
                        <Dropdown.Item>HiLife</Dropdown.Item>
                        <Dropdown.Item>Island Snow Hawaii</Dropdown.Item>
                        <Dropdown.Item>Kailua Boys</Dropdown.Item>
                        <Dropdown.Item>Kailua Girls</Dropdown.Item>
                        <Dropdown.Item>Ka'ohao</Dropdown.Item>
                        <Dropdown.Item>Lanikai Canoe Club</Dropdown.Item>
                        <Dropdown.Item>Mokulua Hula</Dropdown.Item>
                        <Dropdown.Item>Patagonia</Dropdown.Item>
                        <Dropdown.Item>Reyn Spooner</Dropdown.Item>
                        <Dropdown.Item>RVCA Hawaii</Dropdown.Item>
                        <Dropdown.Item>SRF</Dropdown.Item>
                        <Dropdown.Item>Stance</Dropdown.Item>

                    </Dropdown.Menu>

                </Dropdown>
               <Menu.Item>Search</Menu.Item>
            </Menu>

        )
    }
}

class TopMenu extends React.Component{

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render(){

        const { activeItem } = this.state

        return(

            <Menu>
                <Menu.Item
                    name='facebook'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >
                    <i class = "facebook f icon"></i>
                </Menu.Item>

                <Menu.Item
                    name='twitter'
                    active={activeItem === 'reviews'}
                    onClick={this.handleItemClick}
                >
                    <i class = "twitter icon"></i>
                </Menu.Item>

                <Menu.Item
                    name='pintrest'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    <i class = "pinterest icon"></i>
                </Menu.Item>
                <Menu.Item
                    name='instagram'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    <i class = "instagram icon"></i>
                </Menu.Item>
                <Menu floated = {"right"}>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                    >
                        <i class = "home icon"></i>
                    </Menu.Item>
                    <Menu.Item
                        name='search'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                    >
                        <i class = "search icon"></i>
                    </Menu.Item>
                    <Menu.Item
                        name='person'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                    >
                        <i class = "profile icon"></i>
                    </Menu.Item>
                    <Menu.Item
                        name='cart'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                    >
                        MY CART <i class = "cart icon"></i>
                    </Menu.Item>
                </Menu>
            </Menu>
        );
    }
}


class IslandSnowLogo extends React.Component {
    render() {
        return (
            <Image centered src = "https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?15691486226381689305"/>
        )
    }
}



class FullWidthImage extends React.Component {
    render() {
        return (
            <Image centered src = "https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?15691486226381689305"/>

        )
    }
}

class FooterMenu extends React.Component {
    render() {
        return (
            <div className='footerarea'>
        <Container className = 'colorwhite'>
            <Grid columns = {3}>
                <Grid.Column width={6}>

                        <List>

                            <List.Item><hr/></List.Item>
                            <List.Item>About Us</List.Item>
                            <List.Item>Videos</List.Item>
                            <List.Item>Store Locations</List.Item>
                            <List.Item>Shipping & Return</List.Item>
                            <List.Item>Terms & Conditions</List.Item>
                            <List.Item>Privacy Policy</List.Item>
                        </List>


                </Grid.Column>
                <Grid.Column width={5}>


                    <List>
                        <List.Item><hr/></List.Item>
                        <List.Item>MEN</List.Item>
                        <List.Item>WOMEN</List.Item>
                        <List.Item>KIDS</List.Item>
                        <List.Item>BRANDS</List.Item>
                        <List.Item>SEARCH</List.Item>
                    </List>


                </Grid.Column>
                <Grid.Column width={5}>


                    <List>
                        <List.Item><hr/></List.Item>
                        <List.Item>CONNECT</List.Item>
                    </List>


                </Grid.Column>
            </Grid>
        </Container>
            </div>
        )
    }
}

class IslandSnow extends React.Component {

    render() {
        return (
            <div>
                <TopMenu/>
                <IslandSnowLogo/>
                <MiddleMenu/>
                <FullWidthImage/>
                <FooterMenu/>
            </div>
        );
    }
}




ReactDOM.render(<IslandSnow/>, document.getElementById('root'));