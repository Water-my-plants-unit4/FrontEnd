import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { setLoggedIn, addPlant, unsetEditing, submitEdit } from "../actions";

const PlantForm = (props) => {
    const { setLoggedIn, addPlant, isEditing, unsetEditing, submitEdit, plants } =
      props;
  
    const { id } = useParams();
  
    const intiialFormValues = () => {
      if (isEditing === true) {
        const prePopulatedPlant = plants.filter(
          (plant) => plant.id.toString() === id.toString()
        );
        return prePopulatedPlant[0];
      } else
        return {
          id: id,
          nickname: "",
          species: "",
          h2oFrequency: "",
          description: "",
        };
    };
  
    const classes = useStyles();
  
    const [formValues, setFormValues] = useState(intiialFormValues());
  
    const handleChanges = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };
  
    const { push } = useHistory();
  
    const handleAdd = (e) => {
      e.preventDefault();
      console.log("submitting...");
      addPlant(formValues);
      push("/plants");
    };
  
    //with real endpoint take out id
    const handleEdit = (e) => {
      e.preventDefault();
      console.log("editing...", id);
      submitEdit(formValues);
      unsetEditing();
      push("/plants");
    };
  
    const handleCancel = () => {
      unsetEditing();
      push("/plants");
    };
  
    useEffect(() => {
      if (localStorage.getItem("token")) {
        setLoggedIn();
      }
    }, [setLoggedIn]);
  
    return (
      <Container>
        <Typography
          variant="h6"
          component="h2"
         
        >
          {isEditing ? "Edit Plant" : "Add a New Plant"}
        </Typography>
  
        <form>
          <TextField
            onChange={handleChanges}
            value={formValues.nickname}
            name="nickname"
            className={classes.field}
            label="Nickname"
          />
          <TextField
            onChange={handleChanges}
            value={formValues.species}
            name="species"
            className={classes.field}
            label="Species"
          />
          <TextField
            onChange={handleChanges}
            value={formValues.h2oFrequency}
            name="h2oFrequency"
            className={classes.field}
            label="How often does it need watering?"
          
          />
          <TextField
            onChange={handleChanges}
            value={formValues.description}
            name="description"
            className={classes.field}
            label="Tell us about your plant"
            rows={4}
            required
          />
          {isEditing ? (
            <Button
              onClick={handleEdit}
              type="submit"
              
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={handleAdd}
              type="submit"
            
            >
              Add Plant
            </Button>
          )}
          <Button
            className={classes.cancel}
            onClick={handleCancel}
            
          >
            Cancel
          </Button>
        </form>
      </Container>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      isEditing: state.isEditing,
      plants: state.plants,
    };
  };
  
  export default connect(mapStateToProps, {
    setLoggedIn,
    addPlant,
    unsetEditing,
    submitEdit,
  })(PlantForm);
  