package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeRole(data map[string]interface{}) (*schemas.Role, error) {
    var role schemas.Role

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &role)
    if err != nil {
        return nil, err
    }

    return &role, nil
}