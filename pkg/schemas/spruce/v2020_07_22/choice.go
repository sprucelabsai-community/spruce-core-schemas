package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeChoice(data map[string]interface{}) (*schemas.Choice, error) {
    var choice schemas.Choice

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &choice)
    if err != nil {
        return nil, err
    }

    return &choice, nil
}