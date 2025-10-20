package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeSkill(data map[string]interface{}) (*schemas.Skill, error) {
    var skill schemas.Skill

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &skill)
    if err != nil {
        return nil, err
    }

    return &skill, nil
}