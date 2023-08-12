
import { useForm } from 'react-hook-form';
import { Hotel } from '../types/hotel'
import useStore, { Store } from "../store"
import { Button, Input, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

type IBookingForm = {
    hotel: Hotel
}

type TypeForm = {
    startDate: string,
    endDate: string,
}

export function BookingForm({ hotel }: IBookingForm) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TypeForm>();
    const addReservation = useStore((state: any) => state.addReservation);

    const onSubmit = (data: any) => {
        addReservation(data);
        toast.success("Reservation made!");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type='date' {...register("startDate", { required: true })} />
            {errors?.startDate && (
                <Typography style={{ color: 'red' }} >Start Date is Required</Typography>
            )}

            <Input type='date' {...register("endDate", { required: true })} />
            {errors?.endDate && (
                <Typography style={{ color: 'red' }} >Start Date is Required</Typography>
            )}
            <Button variant='contained' type="submit">Send</Button>
        </form>
    )

}