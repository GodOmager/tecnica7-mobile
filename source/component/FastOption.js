import React from "react";
import { Button } from "react-native";

export default function FastOption(properties) {
    properties.scale = properties.scale ?? 1;

    return (
        <ToggleOp>
            <FontAwesome5 
                name={properties.icon} 
                size={24 * properties.scale} 
                solid
            />
        </Button>
    );
}
