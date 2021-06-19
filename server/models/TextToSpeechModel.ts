import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface TextToSpeechAttributes {
  id: string;
  text: string;
  filename: string;
};

interface TextToSpeechCreationAttributes
  extends Optional<TextToSpeechAttributes, 'id'> {}

interface TextToSpeechInstance
  extends Model<TextToSpeechAttributes, TextToSpeechCreationAttributes>,
    TextToSpeechAttributes {
    //   createdAt?: Date;
    //   updatedAt?: Date;
    }

const TextToSpeechModel = sequelize.define<TextToSpeechInstance>(
    'text_to_speech', 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'text_to_speech',
        timestamps: false
    });

export default TextToSpeechModel;