import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { Link } from "wouter"


const fetchHotel = async () => {
    const res = await fetch("http://localhost:3001/hotels")
    if (!res.ok) {
        throw new Error("Network response was not Ok")
    }
    return res.json()
}
type Hotel = {
    id:number,
    title: string,
    description: string,
}
function HotelList() {
    const {
        data: hotels,
        isLoading,
        error,
    } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotel })

    if (isLoading) {
        return <div>isLoading</div>
    }

    if (error) {
        return <div> Error fetchcing Hotes! {error?.message}</div>
    }
 
   

    return(<>
           <Typography variant="h4" component="h2">
             Booking App
           </Typography>
           <Stack spacing={2}>
              {hotels.map((hotel: any) => (
                   <Link key={hotel.id} href ={`/hotel/${hotel.id}`}>
                      <Card sx={{maxWidth: 345, backgroundColor: "#e8e8e8"}}>
                        <CardMedia
                         sx={{height: 140}}
                         image={hotel.image}
                         title={hotel.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {hotel.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {hotel.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">See Details</Button>
                        </CardActions>
                      </Card>
                   </Link>
              ))}
           </Stack>
            
           </>
        )
}

export default HotelList;