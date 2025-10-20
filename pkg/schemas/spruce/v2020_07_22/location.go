package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeLocation(data map[string]interface{}) (*schemas.Location, error) {
    var location schemas.Location

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &location)
    if err != nil {
        return nil, err
    }

    return &location, nil
}