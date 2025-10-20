package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakePersonOrganization(data map[string]interface{}) (*schemas.PersonOrganization, error) {
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