package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakePersonLocation(data map[string]any) (*schemas.PersonLocation, error) {
    var personLocation schemas.PersonLocation

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &personLocation)
    if err != nil {
        return nil, err
    }

    return &personLocation, nil
}