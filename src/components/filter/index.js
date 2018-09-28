import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchDataWithFilter} from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  select: {
    borderBottom: "2px solid white",
 },
  label: {
    color: "white"
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class Filter extends React.Component {
  state = {
    option: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.handleFilterClick(event.target.value);
  };

  handleFilterClick = (filterValue) => {
    this.props.onClick(filterValue, this.props.items);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select" className={classes.label}>Filter</InputLabel>
          <Select
          className={classes.select}
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.option}
            onChange={event => this.handleChange(event)}
            inputProps={{
              name: 'option',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={"None"}>None</MenuItem>
            <MenuItem value={"Action"}>Action</MenuItem>
            <MenuItem value={"Adventure"}>Adventure</MenuItem>
            <MenuItem value={"Thriller"}>Thriller</MenuItem>
            <MenuItem value={"Drama"}>Drama</MenuItem>
            <MenuItem value={"Romance"}>Romance</MenuItem>
            <MenuItem value={"Biography"}>Biography</MenuItem>
            <MenuItem value={"Sci-Fi"}>Sci-Fi</MenuItem>
            <MenuItem value={"Horror"}>Horror</MenuItem>
            <MenuItem value={"Mystery"}>Mystery</MenuItem>
            <MenuItem value={"Crime"}>Crime</MenuItem>
            <MenuItem value={"Short"}>Short</MenuItem>
            <MenuItem value={"Animation"}>Animation</MenuItem>
            <MenuItem value={"Comdey"}>Comdey</MenuItem>
            <MenuItem value={"Family"}>Family</MenuItem>
            <MenuItem value={"Family"}>Fantasy</MenuItem>

          </Select>
        </FormControl>
      </form>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
      isLoading: state.movieListisLoadingReducer.isLoading,
      hasErrored: state.movieListErrorReducer.hasErrored,
      items:state.movieListReducer.items,
      filter: state.movieListFilterReducer.filter,
      filteredData: state.movieListDataWithFilterReducer.filteredData
  }       
}

const mapDispatchToProps = (dispatch) => {
  return {
      onClick : (newValue, itemsVal) => {
          dispatch(fetchDataWithFilter(newValue, itemsVal));
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Filter));


