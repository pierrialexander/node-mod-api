import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

// Type em modo de interface para poder extender depois
export interface PhraseInstance extends Model {
    id: number;
    author: string;
    txt: string;
}

// agora cria de fato o model
export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'phrases',
    timestamps: false
});