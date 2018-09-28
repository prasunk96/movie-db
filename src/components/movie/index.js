import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {setMovieDetails, fetchDataWithFilter, itemsFetchData} from '../../actions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Movie extends Component {
  componentDidMount() {
    // let first = (url) => {
      this.props.fetchData('http://www.mocky.io/v2/5b44a1b92f00006400583823');
    // };
    // let second = () => {
      this.props.filterVal(this.props.match.params.filter, this.props.items);
    // };
    // first('http://www.mocky.io/v2/5b44a1b92f00006400583823')
    // second()

    // const that = this.props;
    // async function first() {
    //   await that.fetchData('http://www.mocky.io/v2/5b44a1b92f00006400583823');
    //   that.filterVal(that.match.params.filter, that.items);
    // }
    // first();
    if(this.props.match.params.filter === 'None') {
      this.props.content(this.props.items[this.props.match.params.id])
    } else {
      this.props.content(this.props.filteredData[this.props.match.params.id])
    }
    console.log(this.props);
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
          {this.props.movieDetails.Title}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.BoxOffice}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.imdbRating}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.imdbVotes}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Metascore}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Director}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Actors}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Genre}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Language}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Writer}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Awards}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Year}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Released}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Country}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Runtime}
          </Typography>
          <Typography component="p">
            {this.props.movieDetails.Plot}
          </Typography>
        </Paper>
      </div>
    );
  }
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
      isLoading: state.movieListisLoadingReducer.isLoading,
      hasErrored: state.movieListErrorReducer.hasErrored,
      items: state.movieListReducer.items,
      filter: state.movieListFilterReducer.filter,
      filteredData: state.movieListDataWithFilterReducer.filteredData,
      movieDetails: state.movieDetailsReducer.movieDetails
  }       
}
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData:(url) => dispatch(itemsFetchData(url)),
      filterVal : (newValue, itemsVal) => {
        dispatch(fetchDataWithFilter(newValue, itemsVal));
      },
      content: (item) => dispatch(setMovieDetails(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Movie));
