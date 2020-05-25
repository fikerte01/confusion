import React,{Component} from 'react';
import DishdetailComponent from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state ={
            Dishdetail: null
            Comments: null
              
        }
        console.log('Menu Component constructor is invoked');
    }
    componentDidMount() {
        console.log('Menu ComponentDidMount is invoked');

    }

    onDishSelect(dish) {
        this.setState({ Dishdetail: dish, comments:comments});
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%"  src={dish.image} alt={dish.nam} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>

                    </CardBody>
                </Card>
            )

        }else {
            return(
            <div></div>
            );
        }
    }
    render(){

        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={() => this.props.onDishSelect(dish)}>
                      
                          <CardImg width="100%"  src={dish.image} alt={dish.nam} />
                            <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
                          <comments>{comments}</comments>
        
                      </CardImgOverlay>
                  </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');

        return(
            <div className="container">
                <div className="row">
                {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.props.onDishSelect)}
                </div>
        
 
                

                
            </div>

        );
    }

}

export default Menu;