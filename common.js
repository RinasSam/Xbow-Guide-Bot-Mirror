/*
 * common.js: common definitions for Xbow Guide Bot.
 * 
 * This file is part of Xbow Guide Bot: The Free and Open Source Xbow Matchup Guides Discord Bot.
 * Copyright (C) 2022 RinasSam.
 * 
 * Xbow Guide Bot is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Xbow Guide Bot is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * Author contact information:
 * 	Email:		samkhaldoon2006@gmail.com
 * 	Discord:	RinasSam#0931
 */

/* Here are the important definitions and includes:
 *
 * fs: Used to access the filesystem.
 * discord.js: API for creating Discord bots.
 * inlineReply: Provides a function to allow the bot to reply to messages.
 *
 * prefix: The command prefix. This forces users to use 'prefixCommand' to execute a command. The default value is 'g!'.
 * guideFolder: The path of the Xbow Matchup Guides.
 * archiveFolder: The path of the Xbow Matchup Guides Archive.
 * version: The bot's version.
 * author: The person owning this version of the bot. CHANGE THIS TO YOUR NAME/NICKNAME/USERNAME WHEN DISTRIBUTING.
 */


const fs = require('fs');
const Discord = require('discord.js');
require("./inlineReply");

const prefix = 'g!'
const guideFolder = './Xbow-Matchup-Guides/Guides';
const archiveFolder = './Xbow-Matchup-Archives/Archives';
const version = '1.0.0';
const author = 'RinasSam';
