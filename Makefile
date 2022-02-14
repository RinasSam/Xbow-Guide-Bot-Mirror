# 
# Makefile: utility makefile to perform some repetitive tasks quickly.
# This file may not be needed, but it is a nice utility to have =).
#
# This file is part of Xbow Guide Bot: The Free and Open Source Xbow Matchup Guides Discord Bot.
# Copyright (C) 2022 RinasSam.
# 
# Xbow Guide Bot is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# Xbow Guide Bot is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
# 
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
# 
# Author contact information:
# 	Email:		samkhaldoon2006@gmail.com
# 	Discord:	RinasSam#0931
#


# 
# Mirror: Uses fossil's mirroring capabilities to mirror the repostory to git and push it to 
# github <https://github.com/RinasSam/Xbow-Guide-Bot-Mirror>.
#

mirror: ../XGB-git/
	fossil git export $< -f -v
