package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakePersonOrganization(data map[string]any) (*schemas.PersonOrganization, error) {
    var personOrganization schemas.PersonOrganization

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &personOrganization)
    if err != nil {
        return nil, err
    }

    return &personOrganization, nil
}