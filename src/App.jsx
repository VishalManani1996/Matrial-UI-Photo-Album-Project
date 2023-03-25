// import React from "react";
// import {  Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
// import {PhotoCamera} from "@material-ui/icons";
// import { makeStyles } from "@material-ui/styles";
// const useStyles= makeStyles((theme)=>({
//       container:{
//         backgroundColor:theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6)
//       }
// }))
// const App=()=>{
//     const classes= useStyles();
//     return(
//         <>
//         <CssBaseline/>
//         <AppBar position="relative">
//             <Toolbar>
//                 <PhotoCamera/>
//                 <Typography variant="h6">
//                     Photo Album
//                 </Typography>
//            </Toolbar>
//         </AppBar>
//         <main>
//             <div className={classes.container}>
//                 <Container maxWidth="sm">
//                  <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
//                     Photo Album
//                  </Typography>
//                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
//                    Hello Every Body This is a Photo Album and I want to make this sentence as long as possible So I can see It.And Also I want to check how text is Alligned
//                  </Typography>
//                  <div>
//                     <Grid container spacing = {2}  justify="center">
//                         <Grid item>
//                             <Button variant="contained" color="primary">
//                                See my photos 
//                             </Button>
//                         </Grid>
//                         <Grid item>
//                             <Button variant="outlined" color="primary">
//                                Secondary Action
//                             </Button>
//                         </Grid>
//                     </Grid>
//                     </div>
//                 </Container>
                
//             </div>
//         </main>
//         </>
//     );
// }
// export default App;
import React from "react";
import {  Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles  from "./styles";
const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9]
const theme = createTheme({
    palette: {
      background: {
        default: '#f5f5f5',
      },
    },
  });

const App=()=>{
    const classes= useStyles();
    return(
        <>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
           </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                 <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Photo Album
                 </Typography>
                 <Typography variant="h5" align="center" color="textSecondary" paragraph>
                   Hello Every Body This is a Photo Album and I want to make this sentence as long as possible So I can see It.And Also I want to check how text is Alligned
                 </Typography>
                 <div className={classes.button}>
                    <Grid container spacing = {2}  justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                               See my photos 
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                               Secondary Action
                            </Button>
                        </Grid>
                    </Grid>
                    </div>
                </Container>
                
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                              Heading
                            </Typography>
                            <Typography>
                              This is an media card you can use this section to describe the content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>    
                            
                        </CardActions>

                        
                    </Card>
                </Grid>
                ))}
                    

                </Grid>

            </Container>
        </main>
        <footer className={classes.footer}>
         <Typography variant="h6" align="center" gutterBottom>
           Footer
         </Typography>
         <Typography variant="subtitle1" align="center" color="textSecondary">
           Something Here to give Footer a purpose
         </Typography>
        </footer>
        </>
    );
}
export default App;