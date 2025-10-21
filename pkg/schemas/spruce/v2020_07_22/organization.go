package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeOrganization(data map[string]any) (*schemas.Organization, error) {
    var organization schemas.Organization

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &organization)
    if err != nil {
        return nil, err
    }

    return &organization, nil
}