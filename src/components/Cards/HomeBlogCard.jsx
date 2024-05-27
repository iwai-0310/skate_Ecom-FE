import React from 'react';
import { Card, CardHeader,Typography ,CardBody} from "@material-tailwind/react";

const HomeBlogCard = ({direction}) => {
  return (
    <div className='h-1/3 w-full bg-black flex justify-center items-center'>
      {/* Image Card (Left Center) */}
      <Card className="w-96 h-auto mx-16">
        <CardHeader shadow={false} floated={false} className="h-48 border-2 mr-16 border-white rounded-2xl">
          <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover rounded-xl" />
        </CardHeader>
      </Card>

      {/* Red Rectangle Card (Right Center) */}
      <Card>
        <CardHeader>
          <div className='h-8 w-72 bg-red-800 rounded-xl flex items-center justify-center mb-4'>
          <Typography color="white" className="font-medium">
            The Art and culture of air pods
          </Typography>
          </div>
        </CardHeader>
        <CardBody>
            <div className='h-auto w-72'>
        <Typography
          variant="small"
          color="white"
          className="font-normal opacity-75 text-center"
        >
Skateboarding is more than just a sport; it's a vibrant subculture and a form of self-expression. Originating in the 1950s as a pastime for surfers when the waves were flat, it quickly evolved into a global phenomenon        </Typography></div>
      </CardBody>
      </Card>
    </div>
  );
};

export default HomeBlogCard;
