package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakePersonLocation(data map[string]interface{}) (*schemas.PersonLocation, error) {
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