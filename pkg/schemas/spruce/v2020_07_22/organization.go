package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeOrganization(data map[string]interface{}) (*schemas.Organization, error) {
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