import React, { Component } from 'react';
import Item from './item';
import './HomePage.css';


class Homepage extends Component {
    render() {
        return (
           <div className="general">
               <div className="row">
                    <div className="itemList">
                        <Item  linkGambar='https://th.bing.com/th/id/R45d9a9b754a5817e2a1e7ca8e746d342?rik=yDB50%2foBSLp9bA&pid=ImgRaw'
                                itemName = "Wireless Mouse"
                                itemPrice = "400.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://uploads.ifdesign.de/award_img_326/oex_large/221323_01_ScreenHunter_805_Mar._23_17.19.jpg'
                                itemName = "ROG GK2000 HORUS"
                                itemPrice = "1.500.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://www.techpowerup.com/review/cherry-mx-board-5-0/images/title.jpg'
                                itemName = "Cherry Mx Board 3"
                                itemPrice = "750.000"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://yall-uk.s3.amazonaws.com/22%2F22002001%2F22002001-4.jpg'
                                itemName = "Drawing Pen 2020"
                                itemPrice = "200.000 Rp"
                            />
                    </div>
               </div>

               <div className="row">
               <div className="itemList">
                        <Item  linkGambar='https://th.bing.com/th/id/R76f781090a220f3243bcfa23be3fd0e7?rik=ODEmb%2f%2foF%2ffTXw&pid=ImgRaw'
                                itemName = "ASUS GeForce GTX 1050Ti"
                                itemPrice = "2.000.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://luckyretail.com/Uploadfile/201909206/068615/068615-1.JPG'
                                itemName = "C2X LED Vision Nocturne Camere"
                                itemPrice = "900.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://th.bing.com/th/id/OIP.GtnvrFyr2jiCjGDDdZf-JQHaHa?pid=ImgDet&w=800&h=800&rs=1'
                                itemName = "MSI GeForce GTX 970"
                                itemPrice = "1.000.000 Rp"
                            />
                    </div>
                    <div className="itemList">
                        <Item  linkGambar='https://th.bing.com/th/id/R93f26e9699b3796f70c231c4d1e1a46f?rik=FuuZTyxqAOkWzg&pid=ImgRaw'
                                itemName = "Screen Gamer ASUS MG278Q "
                                itemPrice = "3.000.000 Rp"
                            />
                    </div>
                   
               </div>

               
               
           </div>

            
           
        )
    }
}

export default Homepage;