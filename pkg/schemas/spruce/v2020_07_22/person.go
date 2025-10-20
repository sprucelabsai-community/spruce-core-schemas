package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakePerson(data map[string]interface{}) (*schemas.Person, error) {
    var person schemas.Person

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &person)
    if err != nil {
        return nil, err
    }

    return &person, nil
}