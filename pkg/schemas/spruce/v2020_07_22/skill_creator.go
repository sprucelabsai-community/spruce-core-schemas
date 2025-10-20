package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeSkillCreator(data map[string]interface{}) (*schemas.SkillCreator, error) {
    var skillCreator schemas.SkillCreator

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &skillCreator)
    if err != nil {
        return nil, err
    }

    return &skillCreator, nil
}