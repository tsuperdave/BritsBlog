import React from 'react'
import { Button, Card, CardContent, CardActions, makeStyles, Typography } from '@material-ui/core'

const useSyles = makeStyles({
    title: {
        fontSize: 40,
        fontFamily: 'Arial',
    },
    cover: {
        backgroundImage: `url(https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80)`,
        backgroundPosition: 'center',
        padding: '35px 25px',
    },
    btn: {

    }
});

const RecentPost = () => {
    const classes = useSyles();

    return (
        <>
            <Card className={classes.cover}>
                <CardContent className={classes.textContainer}>
                    <Typography className={classes.title} gutterBottom>
                        Title of Longer Post
                    </Typography>
                    <Typography varant='h5'>
                        Post Body
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button className={classes.btn}>Read More...</Button>
                </CardActions>
            </Card>
            
        </>
    )
}

export default RecentPost
