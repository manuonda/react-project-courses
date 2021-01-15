import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Item = ({ image, id, name, gender, status, species, created }) => {
    return (
        <Grid item xs={3} >
            <Card>
                <CardMedia x={3}
                   component="img"
                   alt={name}
                   image={image}
                   title={name} 
                />
                 <CardContent>
                  <Typography>
                  {name}-{gender}
                  </Typography>
                  <Typography>
                  
                  Lorem ipsum dolor sit amet
                  
                  </Typography> 
                  <CardActions>
                  <Button size="small" color="secondary">Show More</Button>
                  </CardActions>
                   </CardContent>
            </Card>
        </Grid>
    )
}
export default Item
