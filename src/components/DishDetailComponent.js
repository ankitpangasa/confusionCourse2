import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardBody>
                        {dish.description}
                    </CardBody>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    if(comments!=null){

        const commentItems = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {formatDate(comment.date)}</p>
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

function formatDate(date){
    if (date !== undefined && date !== "") {
        var date = new Date(date);
        var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
        var str = month[date.getMonth()] + " " +  date.getDate() +  ", " + date.getFullYear();
        return str;
    }
    return "";
}

const DishDetail = (props) => {   
    if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish}></RenderDish>
                    <RenderComments comments={props.dish.comments}/>
                </div>  
            </div>
        );
    }
    else
        return(<div></div>);
}

export default DishDetail;