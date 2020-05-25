import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';




class DishDetail extends Component{

    
    renderDish(dish) {

        if (dish != null) {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%"  src={dish.image} alt={dish.nam} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            )
        }
            else {
                return(
                <div></div>
                );
            }

        }
        
     renderComments(comments){

        const comments = this.props.dishes.map((dish)=>{
         if (dish != null) {
             return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                   <CardBody>
                   <CardTitle><h4>{dish.comments}</h4></CardTitle>
                   <CardText>{dish.description}</CardText>
                   </CardBody>
                </Card>
                </div>
             
             )
            
        }
        else {
            return(
            <div></div>
            );
        }

        
        
        
        
    });


}
export default DishDetail;
