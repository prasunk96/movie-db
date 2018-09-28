import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
   },
   grid: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
   },
    card: {
      minWidth: 275,
      minHeight: 275,
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
})

class MovieList extends Component {
    componentDidMount() {
        this.props.fetchData('http://www.mocky.io/v2/5b44a1b92f00006400583823');
    }
    handleClick = (event, index, flag, filter) => {
        this.props.history.push(`/movie/details/${(filter==='')?'None':filter}/${index}`);
   }
    render() {
        if(this.props.hasErrored) {
            return <p>Sorry! There was an error while loading!</p>
        }
        if(this.props.isLoading) {
            return <h3>Loading...</h3>
        }
        const {classes} = this.props;
        // console.log(this.props);
        if(this.props.filteredData.length<1) {
            return (
                <div className={classes.root}>
                <Grid container spacing={24}>
                    {
                        this.props.items.map((item, index) => (
                            <Grid key={index} item xs className={classes.grid}>
                                <Card key={`card-${index}`} className={classes.card}>
                                    <CardContent key={`content-${index}`}>
                                        <Typography key={`title-${index}`} className={classes.title} color="textSecondary">
                                            {item.Title}
                                        </Typography>
                                        <Typography key={`rating-${index}`} variant="headline" component="h2">
                                            {item.imdbRating}
                                        </Typography>
                                        <Typography key={`boxOffice-${index}`} className={classes.pos} color="textSecondary">
                                            {item.BoxOffice}
                                        </Typography>
                                        <Typography key={`other-${index}`} component="p">
                                            Director:{item.Director}
                                            <br />
                                            {`Genre:${item.Genre}`}
                                            <br />
                                            {`Language:${item.Languge}`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions key={`button-${index}`}>
                                        <Button size="small" onClick={event => this.handleClick(event, index, "itemsData", this.props.filter)}>Learn More</Button>
                                    </CardActions>
                                    </Card>
                            </Grid>
                        )) 
                    }
                </Grid>
        </div>
            )
        }
        return (
            <div className={classes.root}>
                    <Grid container spacing={24}>
                        {
                            this.props.filteredData.map((item, index) => (
                                <Grid key={index} item xs className={classes.grid}>
                                    <Card key={`card-${index}`} className={classes.card}>
                                        <CardContent key={`content-${index}`}>
                                            <Typography key={`title-${index}`} className={classes.title} color="textSecondary">
                                                {item.Title}
                                            </Typography>
                                            <Typography key={`rating-${index}`} variant="headline" component="h2">
                                                {item.imdbRating}
                                            </Typography>
                                            <Typography key={`boxOffice-${index}`} className={classes.pos} color="textSecondary">
                                                {item.BoxOffice}
                                            </Typography>
                                            <Typography key={`other-${index}`} component="p">
                                                Director:{item.Director}
                                                <br />
                                                {`Genre:${item.Genre}`}
                                                <br />
                                                {`Language:${item.Languge}`}
                                            </Typography>
                                        </CardContent>
                                        <CardActions key={`button-${index}`}>
                                            <Button size="small" onClick={event => this.handleClick(event, index, "filteredData", this.props.filter)}>Learn More</Button>
                                        </CardActions>
                                        </Card>
                                </Grid>
                            )) 
                        }
                    </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.movieListisLoadingReducer.isLoading,
        hasErrored: state.movieListErrorReducer.hasErrored,
        items:state.movieListReducer.items,
        filter: state.movieListFilterReducer.filter,
        filteredData: state.movieListDataWithFilterReducer.filteredData,
        movieDetails: state.movieDetailsReducer.movieDetails
    }       
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData:(url) => dispatch(itemsFetchData(url)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles (styles) (MovieList));