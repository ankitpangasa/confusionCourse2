import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish){
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={this.props.dish.image} alt={this.props.dish.name}/>
                    <CardBody>
                        <CardTitle>
                            {this.props.dish.name}
                        </CardTitle>
                        <CardBody>
                            {this.props.dish.description}
                        </CardBody>
                    </CardBody>
                </Card>
            </div>
        );
    }

    formatDate(date){
        if (date !== undefined && date !== "") {
            var date = new Date(date);
            var month = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            var str = month[date.getMonth()] + " " +  date.getDate() +  ", " + date.getFullYear();
            return str;
          }
          return "";
    }

    renderComments(comments){
        if(comments!=null){
            const commentItems =comments.map((comment)=>{
                return(
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {this.formatDate(comment.date)}</p>
                    </li>
                );
            });
            return(
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentItems}
                    </ul>
                </div>
            );
        }
        else
            return (<div></div>);
    }

    render() {
        if(this.props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>  
                </div>
            );
        }
        else
            return(<div></div>);
    }
}

export default DishDetail;