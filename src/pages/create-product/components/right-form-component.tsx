import React from 'react';
import {IconDollar, PriceInput, Right, RightForm} from "../create-product.styles";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Field} from "formik";
import {CategoriesData, CharacteristicData} from "../../../data";
import {CreateProductFormInterface} from "../../../interfaces/create-product-form.interface";
import {booleanState, stringState} from "../../../types/state.types";

interface RightFormComponentsProps extends CreateProductFormInterface {
    setModalOpen: booleanState
    setModalType: stringState
    setIsAddCharacteristic: booleanState
}

function RightFormComponent({
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    setModalOpen,
    setModalType,
    setIsAddCharacteristic
}: RightFormComponentsProps) {

    const handleOpenModalWithIndex = (index: number, types?: string, num?: number, isCharacteristic?: boolean) => {
        let type: string | any;
        switch (index) {
            case 1:
                type = "category";
                break;
            case 2:
                type = "characteristic";
                break;
            case num:
                type = types
                break;
            default:
                type = "";
        }
        setModalOpen(true);
        if(index > 2) {
            setIsAddCharacteristic(true)
        } else {
            setIsAddCharacteristic(false)
        }
        setModalType(type);
    };

    return (
        <>
            <Right>
                <RightForm>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Field
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.category}
                            label="Category"
                            name={"category"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            as={Select}
                            helperText={errors.category}
                        >
                            {CategoriesData.map(item => (
                                <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem>
                            ))}
                            <MenuItem sx={{backgroundColor: "rgba(0, 0, 0, 0.04)"}}
                                      onClick={() => handleOpenModalWithIndex(1, )}>Add new Category</MenuItem>
                        </Field>
                    </FormControl>
                    <PriceInput>
                        <IconDollar>$</IconDollar>
                        <Field
                            type={"text"}
                            error={errors.price && touched.price}
                            name="price"
                            id=":ra:"
                            aria-invalid={true}
                            label=". .Price"
                            onBlur={handleBlur}
                            as={TextField}
                            required
                            onChange={handleChange}
                            value={values.price}
                            fullWidth
                            aria-describedby=":ra:-helper-text"
                            placeholder={"0.00"}
                            helperText={errors.price}
                        />
                    </PriceInput>
                </RightForm>
                <RightForm style={{marginTop: "20px"}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Add characteristic</InputLabel>
                        <Field
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Add characteristic"
                            as={Select}
                            value={""}
                            helperText={errors.category}
                        >
                            {CharacteristicData.map(item => (
                                <MenuItem key={item.id} value={item.type[0]} onClick={() => handleOpenModalWithIndex(item.id + 2, item.type, item.id + 2, true)}>{item.name}</MenuItem>
                            ))}
                            <MenuItem sx={{backgroundColor: "rgba(0, 0, 0, 0.04)"}}
                                      onClick={() => handleOpenModalWithIndex(2)}>Add new characteristic</MenuItem>
                        </Field>
                    </FormControl>
                </RightForm>
                <Button type={"submit"}>Create Product</Button>
            </Right>
        </>
    );
}

export default RightFormComponent;